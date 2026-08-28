import Button from "../shared/Button";
import ExploreImage from "../../app/assets/explore/explore-image.png";
import RoundLogo from "../../app/assets/explore/explore-roundplayButton.png";
import TriangleLogo from "../../app/assets/explore/explore-trianglePlay-icon.png";
import Container from "../shared/Container";

export default function Explore() {
  return (
    <section className="bg-white py-10 md:py-20">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left content */}
          <div className=" text-center max-w-lg">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Many Block and Components
            </h2>

            <p className="mt-6 text-slate-600 md:pb-20">
              Startup framework contains components and complex blocks which can
              easily be integrated into almost any design.
            </p>

            <Button
              variant="ghost"
              size="md"
              className="mt-8 rounded-full border border-gray-500"
            >
              Explore
            </Button>
          </div>

          {/* Right image */}
          <div className="relative pt-5">
            <img
              src={ExploreImage}
              alt="Explore Video Thumbnail"
              className="h-auto w-full"
            />

            {/* Play Button */}
            <button
              className="group absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-transform duration-200 hover:scale-110"
              aria-label="Play video"
            >
              {/* Round background */}
              <img src={RoundLogo} alt="" className="absolute h-full w-full" />

              {/* White triangle */}
              <img src={TriangleLogo} alt="" className="relative h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
