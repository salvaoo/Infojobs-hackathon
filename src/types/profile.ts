
export interface Profile {
   profile:   ProfileProps;
}

export interface ProfileProps {
   curriculum:   Curriculum;
   cvText:       string;
   education:    Education[];
   experience:   Experience[];
   futurejob:    Futurejob;
   personaldata: Personaldata;
   skill:        Skill;
}

export interface Curriculum {
   id:              number;
   code:            string;
   name:            string;
   principal:       boolean;
   completed:       boolean;
   incompleteSteps: any[];
}

export interface Education {
   id:                 number;
   educationLevelCode: string;
   courseCode:         string;
   startingDate:       Date;
   stillEnrolled:      boolean;
   institutionName:    string;
   hideEducation:      boolean;
   finishingDate?:     Date;
}

export interface Experience {
   id:             string;
   company:        string;
   job:            string;
   description:    string;
   startingDate:   Date;
   onCourse:       boolean;
   category:       string;
   subcategories:  string[];
   industry:       string;
   level:          string;
   staff:          string;
   salaryMin:      string;
   salaryMax:      string;
   salaryPeriod:   string;
   hideSalary:     boolean;
   visible:        boolean;
   expertise:      any[];
   finishingDate?: Date;
}

export interface Futurejob {
   working:                         boolean;
   employmentStatus:                string;
   motivationToChange:              string;
   futureJobGoals:                  string;
   yearsOfExperience:               string;
   lastJobSearch:                   string;
   lastJobSearchDetails:            string;
   preferredPosition:               string;
   subcategories:                   string[];
   workDay:                         string;
   availabilityToChangeHomeAddress: string;
   availabilityToTravel:            string;
   preferredDestinations:           string[];
   salaryPeriod:                    string;
   salaryMin:                       string;
   preferredSalary:                 string;
}

export interface Personaldata {
   name:                     string;
   surname1:                 string;
   surname2:                 string;
   nationalIdentityCardType: string;
   nationalIdentityCard:     string;
   birthDay:                 Date;
   gender:                   string;
   country:                  string;
   province:                 string;
   cityCode:                 string;
   cityName:                 string;
   zipCode:                  string;
   preferredContactPhone:    string;
   mobilePhone:              string;
   webpages:                 Webpage[];
   driverLicenses:           string[];
   vehicleOwner:             boolean;
   freelance:                boolean;
   nationalities:            string[];
   email:                    string;
}

export interface Webpage {
   url: string;
}

export interface Skill {
   expertise: Expertise[];
   language:  Language[];
}

export interface Expertise {
   skill: string;
   level: Level;
}

export enum Level {
   Alto = "alto",
   Medio = "medio",
}

export interface Language {
   id:       number;
   writing:  string;
   comments: string;
   reading:  string;
   speaking: string;
}