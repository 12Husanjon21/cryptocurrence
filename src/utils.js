export const saveToLocalStorage = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};

export const getFromLocalStorage = (name) => {
  return JSON.parse(localStorage.getItem(name));
};

export const customTheme = {
  root: {
    base: "w-full bg-[#16171A] text-left",
    shadow:
      "absolute left-0 top-0 -z-10 h-full w-full rounded-lg drop-shadow-md dark:bg-black",
    wrapper: "relative",
  },
  body: {
    base: "group/body",
    cell: {
      base: " bg-[#16171A] px-6 py-4",
    },
  },
  head: {
    base: "group/head text-xs uppercase",
    cell: {
      base: "px-4 py-3 text-black bg-[#87CEEB] py-4",
    },
  },
  row: {
    base: "group/row border-b-[1px] bg-[#14161a]  border-[#515151]",
    hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
    striped:
      "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700",
  },
};

export const customThemePagination = {
  base: "",
  layout: {
    table: {
      base: "text-sm text-[#87CEEB] dark:text-[#87CEEB]",
      span: "font-semibold text-gray-900 dark:text-white",
    },
  },
  pages: {
    base: "xs:mt-0 mt-2 inline-flex items-center rounded-full -space-x-px",
    showIcon: "inline-flex",
    previous: {
      base: "rounded-full text-[#87CEEB] bg-inherit hover:bg-gray-800  p-2 leading-tight ",
      icon: "h-5 w-5",
    },
    next: {
      base: "rounded-full text-[#87CEEB] bg-inherit hover:bg-gray-800 p-2 leading-tight   ",
      icon: "h-5 w-5",
    },
    selector: {
      base: "w-10 bg-inherit rounded-full hover:bg-gray-800 py-2 leading-tight text-[#87CEEB] ",
      active:
        "bg-inherit rounded-full hover:bg-gray-800 text-cyan-600 hover:text-cyan-700",
      disabled: "cursor-not-allowed opacity-50",
    },
  },
};

export const DropdownTheme = {
  arrowIcon: "ml-2 h-4 w-4",
  content: "py-1 focus:outline-none",
  floating: {
    animation: "transition-opacity",
    arrow: {
      base: "absolute z-10 h-2 w-2 rotate-45",
      style: {
        dark: "bg-[#14161A]",
        light: "bg-[#14161A]",
        auto: "bg-white dark:bg-[#14161A]",
      },
      placement: "-4px",
    },
    base: "z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none",
    content: "py-1 text-sm text-gray-700 dark:text-gray-200",
    divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
    header: "block px-4 py-2 text-sm text-white dark:text-white",
    hidden: "invisible opacity-0",
    item: {
      container: "",
      base: "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-[#22252c] focus:bg-[#22252c] focus:outline-none dark:text-[#22252c] dark:hover:bg-[#22252c]dark:hover:text-[#22252c]",
      icon: "mr-2 h-4 w-4",
    },
    style: {
      dark: "bg-gray-900 text-white dark:bg-gray-700",
      light: "border border-gray-200 bg-white text-gray-900",
      auto: "border border-gray-400 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
    },
    target: "w-fit",
  },
  inlineWrapper: "flex items-center",
};
