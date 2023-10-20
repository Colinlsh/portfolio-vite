import { useAppDispatch } from "../../app/hooks";
import { setIsPersist } from "../../app/slice/uiStateSlice";
import Button from "./custom/Button";

const Cookies = () => {
  const dispatch = useAppDispatch();

  // 1 hour = 60000 * 60

  return (
    <div className="z-50 fixed bottom-2 w-full left-1/4">
      <div className="w-[50%] flex justify-center items-center bg-slate-50 drop-shadow-lg p-5 space-x-2 border-thin">
        <h1>I use cookies</h1>
        <Button
          label={"ok"}
          className="p-2 bg-white text-black backdrop-blur-sm bg-opacity-80"
          onClick={() => {
            dispatch(setIsPersist(true));
          }}
        />
        <Button
          label={"no"}
          className="p-2 bg-black text-white backdrop-blur-sm bg-opacity-80"
          onClick={() => {
            dispatch(setIsPersist(false));
          }}
        />
      </div>
    </div>
  );
};

export default Cookies;
