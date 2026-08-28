import Button from "../shared/Button";
import ExploreImage from "../../app/assets/explore/explore-image.png";
import RoundLogo from "../../app/assets/explore/explore-roundplayButton.png";
import TriangleLogo from "../../app/assets/explore/explore-trianglePlay-icon.png";

export default function Explore() {
  return (
    <section className="bg-white py-20">
      <div className="flex items-center justify-between">
        <div>
          <h1>Many Block and Components</h1>
          <p>
            Startup framework contains components and complex blocks which can
            easily be integrated into almost any design
          </p>

          <Button
            variant="ghost"
            size="md"
            className="border border-black rounded-lg"
          >
            Explore
          </Button>
        </div>

        <div>
          <img src={ExploreImage} alt="Explore Video Thumbnail Image" />
        </div>
      </div>
    </section>
  );
}
