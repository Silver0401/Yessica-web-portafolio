import { RefObject } from "react";

export type Sections =
| "Initial"
| "Skills"
| "Contact"
| "Education"
| "Experience"
| "Langs" 
| "Achievements" 
| "Personal" 
| "ExitSections";

export type SvgTypes = 
"book" |
"screw" |
"phone" |
"lang" |
"trophy" |
"clock"

export type LangTypes = "en" | "sp"

export type SkillType = "language" | "software"

export type OnOff = "on" | "off"

export interface SectionProps {
  setSection: (input: Sections) => any;
}

export interface AnimBoxProps {
  setSection: (input: Sections) => any
  sectionSelected: Sections
}

export interface PersonalProps {
  setSection: (input: Sections) => any
  sectionSelected: Sections
	personalRef: RefObject<HTMLTableSectionElement>
}





