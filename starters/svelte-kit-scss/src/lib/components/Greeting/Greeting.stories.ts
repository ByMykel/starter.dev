import Greeting from './Greeting.svelte';

export default {
  component: Greeting,
  title: 'Example/Greeting',
  excludeStories: /.*Data$/,
  argTypes: {
    message: 'from Storybook',
  },
  args: {
    message: 'from Storybook',
  },
};

const Template = ({ ...args }) => ({
  Component: Greeting,
  props: args,
});

export const Default = Template.bind({});
