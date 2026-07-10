"use client";

import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { jsPDF } from "jspdf";

export default function EmployerCandidateList() {
  const [selectedGender, setSelectedGender] = useState<
    "male" | "female" | "both"
  >("male");
  const [selectedSkills, setSelectedSkills] = useState<string[]>(["C#"]);

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const downloadReport = (candidate: any) => {
    const doc = new jsPDF();

    // 1. Draw page frame / border
    doc.setDrawColor(226, 232, 240); // slate-200
    doc.rect(10, 10, 190, 277);

    // 2. Header Banner
    doc.setFillColor(26, 43, 74); // Deep Navy #1a2b4a
    doc.rect(10, 10, 190, 30, "F");

    // Header Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(255, 255, 255);
    doc.text("SKILLKWIZZ CANDIDATE ASSESSMENT", 20, 28);
    
    // Header Subtitle
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(0, 188, 212); // Teal #00bcd4
    doc.text("VERIFIED SKILLS PORTFOLIO & ASSESSMENT CERTIFICATE", 20, 35);

    // 3. Candidate Details Section
    // Panel Background
    doc.setFillColor(248, 250, 252); // slate-50
    doc.rect(15, 50, 180, 120, "F");
    doc.setDrawColor(203, 213, 225); // slate-300
    doc.rect(15, 50, 180, 120, "S");

    // Left accent bar
    doc.setFillColor(0, 188, 212); // Teal #00bcd4
    doc.rect(15, 50, 4, 120, "F");

    // Details Content
    let yPos = 65;
    const labelX = 25;
    const valueX = 70;
    const rowHeight = 12;

    const details = [
      { label: "Candidate Name:", value: candidate.name, bold: true },
      { label: "Authorized By:", value: candidate.company },
      { label: "Assessed Skills:", value: candidate.skills.join(", ") },
      { label: "Location:", value: candidate.location },
      { label: "Assessment Status:", value: "Completed", color: [34, 197, 94] }, // Green
      { label: "Verification ID:", value: `SK-CERT-${candidate.id}8294`, mono: true },
      { label: "Date of Issue:", value: new Date().toLocaleDateString() }
    ];

    details.forEach(item => {
      // Label
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(71, 85, 105); // slate-600
      doc.text(item.label, labelX, yPos);

      // Value
      if (item.mono) {
        doc.setFont("courier", "bold");
      } else if (item.bold) {
        doc.setFont("helvetica", "bold");
      } else {
        doc.setFont("helvetica", "normal");
      }
      doc.setFontSize(11);
      
      if (item.color) {
        doc.setTextColor(item.color[0], item.color[1], item.color[2]);
      } else {
        doc.setTextColor(15, 23, 42); // slate-900
      }
      
      doc.text(item.value, valueX, yPos);
      yPos += rowHeight;
    });

    // Score Badge (Circular Graphic) on the Right of Panel
    const badgeCenterX = 155;
    const badgeCenterY = 110;
    
    // Outer shadow circle
    doc.setFillColor(226, 232, 240); // slate-200
    doc.circle(badgeCenterX, badgeCenterY, 21, "F");

    // Outer circle
    doc.setFillColor(0, 188, 212); // Teal #00bcd4
    doc.circle(badgeCenterX, badgeCenterY, 20, "F");

    // Inner circle
    doc.setFillColor(255, 255, 255);
    doc.circle(badgeCenterX, badgeCenterY, 16, "F");

    // Score text
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(26, 43, 74); // Deep Navy
    doc.text(`${candidate.percentile}%`, badgeCenterX, badgeCenterY + 4, { align: "center" });

    // Label below badge
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(71, 85, 105); // slate-600
    doc.text("PERCENTILE SCORE", badgeCenterX, badgeCenterY + 23, { align: "center" });

    // 4. Verification/Notice Section
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(26, 43, 74); // Deep Navy
    doc.text("VERIFICATION NOTICE", 15, 190);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(71, 85, 105); // slate-600
    const noticeText = "This certificate verifies that the candidate named above has successfully completed the SkillKwizz skill assessment. The results displayed in this report reflect the candidate's performance under controlled testing conditions. This report is issued electronically and does not require a physical signature.";
    
    // Split text to fit page width
    const splitNotice = doc.splitTextToSize(noticeText, 180);
    doc.text(splitNotice, 15, 200);

    // 5. Signature Area Mock
    doc.setDrawColor(203, 213, 225); // slate-300
    doc.line(140, 245, 190, 245);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139); // slate-500
    doc.text("Authorized Signature", 165, 250, { align: "center" });
    doc.setFont("helvetica", "bold");
    doc.text("SkillKwizz Registrar", 165, 255, { align: "center" });

    // 6. Footer
    doc.setDrawColor(226, 232, 240); // slate-200
    doc.line(10, 268, 200, 268);
    
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184); // slate-400
    doc.text("SkillKwizz Assessment Services © 2026. All rights reserved.", 15, 275);
    doc.text("Verify this certificate at skillkwizz.com/verify", 195, 275, { align: "right" });

    // Save PDF
    doc.save(`${candidate.name.replace(/\s+/g, "_")}_Assessment_Report.pdf`);
  };

  const candidates = [
    {
      id: 1,
      name: "K. Pradeep Kishor",
      initial: "P",
      company: "SkillKwizz",
      skills: ["C#", "Java", "SQL"],
      percentile: 85,
      location: "Bangalore",
      color: "bg-green-600",
    },
    {
      id: 2,
      name: "Manoj",
      initial: "M",
      company: "SkillKwizz",
      skills: ["C#", "Java", "SQL"],
      percentile: 85,
      location: "Bangalore",
      color: "bg-yellow-600",
    },
    {
      id: 3,
      name: "Kasiro",
      initial: "M",
      company: "SkillKwizz",
      skills: ["C#", "Java", "SQL"],
      percentile: 85,
      location: "Bangalore",
      color: "bg-teal-600",
    },
    {
      id: 4,
      name: "Ravi",
      initial: "R",
      company: "SkillKwizz",
      skills: ["C#", "Java", "SQL"],
      percentile: 85,
      location: "Bangalore",
      color: "bg-blue-800",
    },
  ];

  return (
    <div className="text-white">
      {/* Search Bar */}
      <div className="bg-[#1a2b4a] rounded-full overflow-hidden mb-6">
        <div className="grid grid-cols-4">
          <div className="col-span-1 flex items-center px-4 py-3 border-r border-gray-600">
            <Search className="w-5 h-5 mr-2 text-gray-400" />
            <input
              type="text"
              placeholder="Candidate Email ID/Phone/Skill"
              className="bg-transparent w-full focus:outline-none text-white"
            />
          </div>
          <div className="flex items-center px-4 py-3 border-r border-gray-600">
            <MapPin className="w-5 h-5 mr-2 text-gray-400" />
            <input
              type="text"
              placeholder="Location"
              className="bg-transparent w-full focus:outline-none text-white"
            />
          </div>
          <div className="flex items-center px-4 py-3 border-r border-gray-600">
            <div className="relative w-full">
              <select className="w-full bg-transparent appearance-none focus:outline-none text-white">
                <option value="">Job Family</option>
                <option value="software">Software Development</option>
                <option value="data">Data Science</option>
                <option value="design">Design</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between px-4 py-3">
            <button className="text-white hover:text-gray-300">Clear</button>
            <button className="bg-[#00bcd4] text-white px-6 py-1 rounded-full hover:bg-[#00a5bb]">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {/* Filter Section */}
        <div className="col-span-1">
          <div className="bg-[#4a63b3] rounded-lg overflow-hidden">
            <div className="bg-[#4a63b3] p-4 text-xl font-medium">Filter</div>

            <div className="border-t border-blue-400 p-4">
              <h3 className="text-lg mb-3">Gender</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="male"
                    checked={
                      selectedGender === "male" || selectedGender === "both"
                    }
                    onChange={() =>
                      setSelectedGender(
                        selectedGender === "female" ? "both" : "male"
                      )
                    }
                    className="w-4 h-4 mr-2"
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="female"
                    checked={
                      selectedGender === "female" || selectedGender === "both"
                    }
                    onChange={() =>
                      setSelectedGender(
                        selectedGender === "male" ? "both" : "female"
                      )
                    }
                    className="w-4 h-4 mr-2"
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </div>

            <div className="border-t border-blue-400 p-4">
              <h3 className="text-lg mb-3">Skills</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="csharp"
                    checked={selectedSkills.includes("C#")}
                    onChange={() => toggleSkill("C#")}
                    className="w-4 h-4 mr-2"
                  />
                  <label htmlFor="csharp">C#</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="java"
                    checked={selectedSkills.includes("Java")}
                    onChange={() => toggleSkill("Java")}
                    className="w-4 h-4 mr-2"
                  />
                  <label htmlFor="java">Java</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="sql"
                    checked={selectedSkills.includes("SQL")}
                    onChange={() => toggleSkill("SQL")}
                    className="w-4 h-4 mr-2"
                  />
                  <label htmlFor="sql">SQL</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="python"
                    checked={selectedSkills.includes("Python")}
                    onChange={() => toggleSkill("Python")}
                    className="w-4 h-4 mr-2"
                  />
                  <label htmlFor="python">Python</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Candidate List */}
        <div className="col-span-3 space-y-4">
          {candidates.map((candidate) => (
            <div key={candidate.id} className="bg-[#4a63b3]/80 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full ${candidate.color} flex items-center justify-center text-white text-2xl font-bold mr-4`}
                  >
                    {candidate.initial}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">{candidate.name}</h3>
                    <p className="text-gray-300">{candidate.company}</p>
                    <div className="flex items-center mt-1">
                      <p className="text-sm">
                        Skills: {candidate.skills.join(", ")}
                      </p>
                      <div className="mx-4 h-4 border-l border-gray-400"></div>
                      <p className="text-sm">
                        Percentile Score: {candidate.percentile}
                      </p>
                      <div className="mx-4 h-4 border-l border-gray-400"></div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <p className="text-sm">{candidate.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => downloadReport(candidate)}
                  className="bg-[#00bcd4] text-white px-4 py-2 rounded-lg hover:bg-[#00a5bb]"
                >
                  View Report
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
