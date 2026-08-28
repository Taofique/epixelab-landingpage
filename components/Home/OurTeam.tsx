import teamData from "../../data/team.json";
import TeamCard from "../OurTeam/TeamCard";
import Container from "../shared/Container";

import vanessaPhoto from "../../app/assets/ourTeam/Vanessa-photo.png";
import masonPhoto from "../../app/assets/ourTeam/mason-photo.png";
import ireaPhoto from "../../app/assets/ourTeam/Irea-photo.png";

const photoMap: Record<string, string> = {
  "Vanessa-photo.png": vanessaPhoto,
  "mason-photo.png": masonPhoto,
  "Irea-photo.png": ireaPhoto,
};

export default function OurTeam() {
  return (
    <section className="bg-white py-10 md:py-20">
      <Container>
        <div className="text-center mx-auto max-w-2xl pb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Our Team
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Meet The Team
          </h1>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 justify-items-center gap-10 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamData.map((member) => (
            <TeamCard
              key={member.id}
              photoSrc={photoMap[member.photo]}
              name={member.name}
              role={member.role}
              socials={member.socials}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
