import React from 'react'

interface TaskProps {
    id: string,
    title: string,
    state: string,
    onArchiveTask: (id: string) => void
    onPinTask: (id: string) => void
}

export const Task = (props: TaskProps) => {
    return (
        <div className={`list-item ${props.state}`}>
            <label
                htmlFor="checked"
                aria-label={`archiveTask-${props.id}`}
                className="checkbox"
            >
                <input
                    type="checkbox"
                    disabled={true}
                    name="checked"
                    id={`archiveTask-${props.id}`}
                    checked={props.state === "TASK_ARCHIVED"}
                />
                <span
                    className="checkbox-custom"
                    onClick={() => props.onArchiveTask(props.id)}
                />
            </label>

            <label htmlFor="title" aria-label={props.title} className="title">
                <input
                    type="text"
                    value={props.title}
                    readOnly={true}
                    name="title"
                    placeholder="Input title"
                />
            </label>

            {props.state !== "TASK_ARCHIVED" && (
                <button
                    className="pin-button"
                    onClick={() => props.onPinTask(props.id)}
                    id={`pinTask-${props.id}`}
                    aria-label={`pinTask-${props.id}`}
                    key={`pinTask-${props.id}`}
                >
                    <span className={`icon-star`}/>
                </button>
            )}
        </div>
    );
}
