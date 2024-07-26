interface props {
  menuOpen: boolean;
}

function MenuIcon({ menuOpen }: props) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={
        menuOpen
          ? "stroke-gray-400 fill-transparent h-9 w-9 hover:cursor-pointer;"
          : "icon"
      }
    >
      <path
        d="M4 6h16M4 12h16M4 18h16"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default MenuIcon;
