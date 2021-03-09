import { TrueFalseHook } from './true-false-hook.component';
import { act, renderHook } from '@testing-library/react-hooks';

describe('increment', () => {
    it('toggles between true and false', () => {
        const { result } = renderHook(TrueFalseHook)

        act(() => {
            result.current.flipClicked()
        })

        expect(result.current.clicked).toBe(true)
    })
})