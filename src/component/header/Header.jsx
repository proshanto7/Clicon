
import Container from "../common/Container";
import Button from "../ui/Button";

function Header() {
  return (
    <header>
      <nav>
        <div className="bg-primaryBlack py-2">
          <Container>
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-2 transform-flat">
                <button className="bg-discount text-[20px] font-semibold px-2 leading-7 capitalize cursor-pointer rotate-[-8deg] ">
                  black
                </button>

                <h1 className="font-semibold text-white text-[24px]">Friday</h1>
              </div>

              <div className="flex gap-1 items-center text-white">
                <span className="text-[14px] font-medium">Up to</span>
                <h2 className="text-warning text-[40px] font-semibold  ">
                  59%
                </h2>
                <span className="text-white text-[20px]">OFF</span>
              </div>

              <Button
                title="Shop now"
                className="bg-warning hover:bg-primaryOrenge duration-300"
              />
            </div>
          </Container>
        </div>
      </nav>
    </header>
  );
}

export default Header;
