interface props {
  className: string;
}

function SearchIcon({ className }: props) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.954 14.946L21 21m-4-11a7 7 0 11-14 0 7 7 0 0114 0z"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SearchIcon;
