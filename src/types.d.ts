export type Sections =
| "Initial"
| "Skills"
| "Contact"
| "Education"
| "Experience"
| "Langs" 
| "ExitSections";

export type SvgTypes = 
"book" |
"screw" |
"phone" |
"lang" |
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
  sectionSelected: Sections
}


