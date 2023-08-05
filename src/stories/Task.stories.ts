import {Task} from '../components/Task';
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'Example/Task',
    component: Task,
} satisfies Meta<typeof Task>

export default meta

type Story = StoryObj<typeof Task>

export const Default: Story = {
    args: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX',
    }
}

export const Pinned: Story = {
    args: {
        ...Default.args,
        state: 'TASK_PINNED',
    }
};

export const Archived: Story = {
    args: {
        ...Default.args,
        state: 'TASK_ARCHIVED',
    }
};
