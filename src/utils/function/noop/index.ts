/**
 * A no-op (empty) function that does nothing.
 * Used to prevent side effects caused by type constraints.
 *
 * @example
 * ```ts
 *
 * interface Props {
 *   onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
 * }
 *
 * const Foo = ({ onChange = noop }: Props) => {
 *   // No need for conditional handling even if input's onChange is required.
 *   return <input onChange={onChange} />;
 * };
 * ```
 */

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = () => {};
