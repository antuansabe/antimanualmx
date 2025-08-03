import { renderHook, act } from '@testing-library/react';
import { useCourseProgress } from '@/shared/hooks/useLocalStorage';

describe('useCourseProgress', () => {
  beforeEach(() => {
    // Limpiar localStorage antes de cada test
    localStorage.clear();
    jest.clearAllMocks();
  });

  it('inicializa con valores por defecto', () => {
    const { result } = renderHook(() => useCourseProgress('test-course'));
    
    expect(result.current.progress).toEqual({
      started: false,
      completed: false,
      completedModules: [],
      progress: 0,
      timeSpent: 0,
    });
  });

  it('inicia el curso correctamente', () => {
    const { result } = renderHook(() => useCourseProgress('test-course'));
    
    act(() => {
      result.current.startCourse();
    });
    
    expect(result.current.progress.started).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('marca módulos como completados', () => {
    const { result } = renderHook(() => useCourseProgress('test-course'));
    
    act(() => {
      result.current.startCourse();
      result.current.markModuleComplete('module-1');
    });
    
    expect(result.current.progress.completedModules).toContain('module-1');
  });

  it('no duplica módulos completados', () => {
    const { result } = renderHook(() => useCourseProgress('test-course'));
    
    act(() => {
      result.current.startCourse();
      result.current.markModuleComplete('module-1');
      result.current.markModuleComplete('module-1');
    });
    
    expect(result.current.progress.completedModules).toHaveLength(1);
  });

  it('actualiza el progreso correctamente', () => {
    const { result } = renderHook(() => useCourseProgress('test-course'));
    
    act(() => {
      result.current.updateProgress({ progress: 50, timeSpent: 30 });
    });
    
    expect(result.current.progress.progress).toBe(50);
    expect(result.current.progress.timeSpent).toBe(30);
  });

  it('persiste y recupera datos del localStorage', () => {
    const initialData = {
      started: true,
      completed: false,
      completedModules: ['module-1'],
      progress: 25,
      timeSpent: 15,
    };
    
    localStorage.setItem('course-progress-test-course', JSON.stringify(initialData));
    
    const { result } = renderHook(() => useCourseProgress('test-course'));
    
    expect(result.current.progress).toEqual(initialData);
  });

  it('reinicia el progreso correctamente', () => {
    const { result } = renderHook(() => useCourseProgress('test-course'));
    
    act(() => {
      result.current.startCourse();
      result.current.markModuleComplete('module-1');
      result.current.updateProgress({ progress: 50 });
      result.current.resetProgress();
    });
    
    expect(result.current.progress).toEqual({
      started: false,
      completed: false,
      completedModules: [],
      progress: 0,
      timeSpent: 0,
    });
  });
});