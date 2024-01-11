import { ChangeEvent } from 'react';

/**
 * Area・InputのonChangeイベントの型
 */
export type FormChangeEvent = ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;
