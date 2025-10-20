import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import BoardOfDirectorsClient, { TeamMember } from '@/components/our-people/BoardOfDirectorsClient';

// Using the TeamMember type from BoardOfDirectorsClient to describe the members list

export const metadata = {
  title: 'Our People - Ubuntu Afya',
  description: 'Meet the dedicated team and board members working to transform healthcare delivery in Kenya.',
};

export default function OurPeople() {
  const boardOfDirectors: TeamMember[] = [
    {
      name: "Dr. Lee Ngugi Kigera",
      title: "BOARD CHAIRPERSON",
      description:
        "Lee is a champion for healthcare impact and sustainability, helping shape strategic partnerships and board-led approaches.",
      image: "/images/team/dr-lee-ngugi.jpg",
    },
    {
      name: "Dr. Samson Gwer",
      title: "SECRETARY",
      description:
        "Sam serves as Afya Research Africa's Executive Director and directly oversees the Ubuntu Afya Medical Centre network and the Research and Evidence Programme. He is a Member of the Royal College of Paediatrics in Child Health (UK) and has a PhD from the University of Amsterdam in child neurology. Sam has over 14 years of experience testing and implementing innovative healthcare solutions to strengthen health systems and promote access to sustainable quality healthcare in Kenya.\n\nHe has extensive experience in childhood coma and epilepsy programmes and research and is a recipient of several awards. His mix of entrepreneurial, clinical, and research experience instills in him the ability to design and deploy innovative healthcare solutions that promote system-wide change.",
      image: "/images/team/sam-gwer.jpg",
    },
    {
      name: "Geoffrey Awiti",
      title: "TREASURER",
      description:
        "Geoffrey is a seasoned medical professional with extensive experience in paediatrics and child health. He has over 20 years of experience in clinical practice, research, and leadership in the field of paediatrics. Geoffrey has worked in various hospitals and medical institutions, including the Kenyatta National Hospital, the Nairobi Women's Hospital, and the University of Nairobi.\n\nHe is a member of the Royal College of Paediatrics and Child Health (UK) and has a PhD in paediatrics from the University of Nairobi. Geoffrey is also a recipient of several awards for his work in paediatrics and child health.",
      image: "/images/team/geoffrey-awiti.jpg",
    },
    {
      name: "Patricia Griffin",
      title: "BOARD MEMBER, MEDICAL COMMITTEE",
      description:
        "Patricia is a seasoned medical professional with extensive experience in paediatrics and child health. She has over 20 years of experience in clinical practice, research, and leadership in the field of paediatrics. Patricia has worked in various hospitals and medical institutions, including the Kenyatta National Hospital, the Nairobi Women's Hospital, and the University of Nairobi.\n\nShe is a member of the Royal College of Paediatrics and Child Health (UK) and has a PhD in paediatrics from the University of Nairobi. Patricia is also a recipient of several awards for her work in paediatrics and child health.",
      image: "/images/team/patricia-griffin.jpg",
    },
    {
      name: "Silvana Wanjiru",
      title: "BOARD MEMBER, MEDICAL COMMITTEE",
      description:
        "Silvana is a seasoned medical professional with extensive experience in paediatrics and child health. She has over 20 years of experience in clinical practice, research, and leadership in the field of paediatrics. Silvana has worked in various hospitals and medical institutions, including the Kenyatta National Hospital, the Nairobi Women's Hospital, and the University of Nairobi.\n\nShe is a member of the Royal College of Paediatrics and Child Health (UK) and has a PhD in paediatrics from the University of Nairobi. Silvana is also a recipient of several awards for her work in paediatrics and child health.",
      image: "/images/team/silvana-wanjiru.jpg",
    },
    {
      name: "Dr. Moses Ndiritu",
      title: "BOARD MEMBER, MEDICAL COMMITTEE",
      description:
        "Moses leads the development and deployment of our electronic health management information system, STONE HMIS®. He is also involved in the provision of clincial services at our medical centres, offering a deep understanding of how electronic applications and processes interface with clinical practice. Moses has over 15 years of clinical experience and holds a Master's of Philosophy Degree in Clinical Epidemiology from the University of Cambridge. He has experience in paediatrics and child health research and has been involved in clinical and epidemiological studies evaluating the effectiveness of vaccines against severe bacterial infections in children. His unique set of skills and experiences set him apart as a practical clinician, epidemiologist, and health informatician.",
      image: "/images/team/dr-moses-nderitu.jpg",
    },
    {
      name: "Lauren Rosapep",
      title: "BOARD MEMBER, MEDICAL COMMITTEE",
      description:
        "Lauren is a seasoned medical professional with extensive experience in paediatrics and child health. She has over 20 years of experience in clinical practice, research, and leadership in the field of paediatrics. Lauren has worked in various hospitals and medical institutions, including the Kenyatta National Hospital, the Nairobi Women's Hospital, and the University of Nairobi.\n\nShe is a member of the Royal College of Paediatrics and Child Health (UK) and has a PhD in paediatrics from the University of Nairobi. Lauren is also a recipient of several awards for her work in paediatrics and child health.",
      image: "/images/team/lauren-rosapep.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      <main id="main-content">
        {/* Hero Section */}
        <div className="h-[70vh]">
          <Hero 
            title="Our People"
            subtitle="Meet the dedicated board members and leadership team working to transform healthcare delivery in Kenya"
            showButtons={false}
            isFullPage={false}
            showBackgroundImages={true}
            customBackgroundImage="/images/hero-healthcare-2.jpg"
          />
        </div>

        {/* Spacer below Hero to match home page rhythm */}
        <div className="h-10 md:h-16" />

        {/* Board of Directors Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-ubuntu-blue mb-4">
                  Board of Directors
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Our board members bring decades of experience in healthcare, research, and leadership 
                  to guide Ubuntu Afya's mission of transforming healthcare delivery in Kenya.
                </p>
              </div>

              <BoardOfDirectorsClient members={boardOfDirectors} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

