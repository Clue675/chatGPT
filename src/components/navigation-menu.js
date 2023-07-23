import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const NavigationMenu = memo(() => {
  const navigate = useNavigate();

  const onExploreTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="flex flex-row items-center justify-end gap-[30px] text-left text-sm text-darkslategray-200 font-roboto md:hidden">
      <div className="relative cursor-pointer" onClick={onExploreTextClick}>
        Explore
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-roboto text-cornflowerblue-200 text-left inline-block">
        Search
      </button>
      <div className="relative cursor-pointer" onClick={onHotelsTextClick}>
        Hotels
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-roboto text-darkslategray-200 text-left inline-block">
        Offers
      </button>
    </div>
  );
});

export default NavigationMenu;
