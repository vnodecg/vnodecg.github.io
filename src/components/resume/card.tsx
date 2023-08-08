import classNames from 'classnames';
import { PropsWithChildren } from 'react';

interface CardProps extends PropsWithChildren {
    title?: string;
    classNames?: string;
}

export function Card(props: CardProps) {
    return <div className={classNames('shadow rounded-xl overflow-hidden bg-white dark:bg-slate-800 dark:text-white', { 'p-5': props.title }, props.classNames, 'print-no-shadow print-no-border')}>
        {props.title && <h2 className="text-lg font-semibold mb-1 dark:text-white mb-1">{props.title}</h2>}
        {props.children}
    </div>
}

