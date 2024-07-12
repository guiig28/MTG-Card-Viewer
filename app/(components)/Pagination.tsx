import { Dispatch, SetStateAction } from "react";

interface props {
  paginationIndex: number;
  setPaginationIndex: Dispatch<SetStateAction<number>>;
  paginationLength: number;
}

const Pagination = ({
  paginationIndex,
  setPaginationIndex,
  paginationLength,
}: props) => {
  const handleClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    if (Number(ev.currentTarget.value) !== paginationIndex) {
      setPaginationIndex(Number(ev.currentTarget.value));
    }
  };

  if (paginationLength <= 7) {
    const icons = [];

    icons.push(
      <button
        className={
          paginationIndex === 1 ? "paginationIconClicked" : "paginationIcon"
        }
        onClick={handleClick}
        value={1}
        key={1}
      >
        1
      </button>
    );

    for (let i = 1; i < paginationLength; i++) {
      icons.push(
        <button
          className={
            paginationIndex === i + 1
              ? "paginationIconClicked"
              : "paginationIcon"
          }
          onClick={handleClick}
          value={i + 1}
          key={i + 1}
        >
          {i + 1}
        </button>
      );
    }

    return (
      <div className="flex w-screen items-center justify-center my-8">
        <div className="gap-x-2 flex">{icons}</div>
      </div>
    );
  } else {
    if (
      paginationIndex === 1 ||
      paginationIndex === 2 ||
      paginationIndex === paginationLength - 1 ||
      paginationIndex === paginationLength
    ) {
      return (
        <div className="flex w-screen items-center justify-center my-8">
          <div className="gap-x-2 flex">
            <button
              className={
                paginationIndex === 1
                  ? "paginationIconClicked"
                  : "paginationIcon"
              }
              onClick={handleClick}
              value={1}
              key={1}
            >
              1
            </button>
            <button
              className={
                paginationIndex === 2
                  ? "paginationIconClicked"
                  : "paginationIcon"
              }
              onClick={handleClick}
              value={2}
              key={2}
            >
              2
            </button>
            <button
              className={
                paginationIndex === 3
                  ? "paginationIconClicked"
                  : "paginationIcon"
              }
              onClick={handleClick}
              value={3}
              key={3}
            >
              3
            </button>
            <div className="size-8 text-center">...</div>
            <button
              className={
                paginationIndex === paginationLength - 2
                  ? "paginationIconClicked"
                  : "paginationIcon"
              }
              onClick={handleClick}
              value={paginationLength - 2}
              key={paginationLength - 2}
            >
              {paginationLength - 2}
            </button>
            <button
              className={
                paginationIndex === paginationLength - 1
                  ? "paginationIconClicked"
                  : "paginationIcon"
              }
              onClick={handleClick}
              value={paginationLength - 1}
              key={paginationLength - 1}
            >
              {paginationLength - 1}
            </button>
            <button
              className={
                paginationIndex === paginationLength
                  ? "paginationIconClicked"
                  : "paginationIcon"
              }
              onClick={handleClick}
              value={paginationLength}
              key={paginationLength}
            >
              {paginationLength}
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex w-screen items-center justify-center my-8">
          <div className="gap-x-2 flex">
            <button
              className="paginationIcon"
              onClick={handleClick}
              value={1}
              key={1}
            >
              1
            </button>
            <div className="size-8 text-center">...</div>
            <button
              className="paginationIcon"
              onClick={handleClick}
              value={paginationIndex - 1}
              key={paginationIndex - 1}
            >
              {paginationIndex - 1}
            </button>
            <button
              className="paginationIconClicked"
              onClick={handleClick}
              value={paginationIndex}
              key={paginationIndex}
            >
              {paginationIndex}
            </button>
            <button
              className="paginationIcon"
              onClick={handleClick}
              value={paginationIndex + 1}
              key={paginationIndex + 1}
            >
              {paginationIndex + 1}
            </button>
            <div className="size-8 text-center">...</div>
            <button
              className="paginationIcon"
              onClick={handleClick}
              value={paginationLength}
              key={paginationLength}
            >
              {paginationLength}
            </button>
          </div>
        </div>
      );
    }
  }
};

export default Pagination;
