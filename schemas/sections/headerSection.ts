export default {
  name: "headerSection",
  type: "object",
  title: "Header Section",
  fields: [
    {
      name: "text",
      type: "string",
      title: "Header Text",
      description: "The main text to display in the header (e.g., 'Limited Time Collector's Edition')",
    },
    {
      name: "highlightText",
      type: "string",
      title: "Highlight Text",
      description: "The highlighted/bold text (e.g., 'Only 250 Copies Available')",
    },
    {
      name: "showCountdown",
      type: "boolean",
      title: "Show Countdown Timer",
      description: "Whether to show a countdown timer in the header",
    },
    {
      name: "countdownEndDate",
      type: "datetime",
      title: "Countdown End Date",
      description: "The date and time when the countdown should end",
      hidden: ({ parent }) => !parent?.showCountdown,
    },
  ],
  preview: {
    select: {
      text: "text",
      highlight: "highlightText",
    },
    prepare({ text, highlight }) {
      return {
        title: "Header Section",
        subtitle: `${text} - ${highlight}`,
      }
    },
  },
} 