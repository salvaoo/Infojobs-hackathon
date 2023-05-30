export interface OffersProps {
   availableSortingMethods: string[];
   currentPage: number;
   currentResults: number;
   dataLayer: DataLayer;
   items: Item[];
   offers: Item[];
   pageSize: number;
   sortBy: string;
   totalPages: number;
   totalResults: number;
}

export interface offersDetailsProps {
   title?:                          string;
   id?:                             string;
   state?:                          number;
   creationDate?:                   string;
   updateDate?:                     string;
   city?:                           string;
   externalUrlForm?:                string;
   blocked?:                        boolean;
   applications?:                   number;
   province?:                       Category;
   experienceMin?:                  Category;
   category?:                       Category;
   subcategory?:                    Category;
   studiesMin?:                     Category;
   residence?:                      Category;
   country?:                        Category;
   contractType?:                   Category;
   journey?:                        Category;
   subSegment?:                     number;
   profile:                        ProfileDetails;
   cityPD?:                         number;
   zipCode?:                        string;
   latitude?:                       number;
   longitude?:                      number;
   exactLocation?:                  boolean;
   department?:                     string;
   vacancies?:                      number;
   minRequirements?:                string;
   description?:                    string;
   desiredRequirements?:            string;
   commissions?:                    string;
   contractDuration?:               string;
   referenceId?:                    string;
   detailedStudiesId?:              number;
   studying?:                       boolean;
   showPay?:                        boolean;
   multiProvince?:                  boolean;
   schedule?:                       string;
   jobLevel?:                       Category;
   staffInCharge?:                  Category;
   hasKillerQuestions?:             number;
   hasOpenQuestions?:               number;
   upsellings?:                     Upsellings;
   epreselec?:                      boolean;
   fiscalAddress?:                  string;
   shouldAskExportConsent?:         boolean;
   exportConsentName?:              string;
   link:                           string;
   active?:                         boolean;
   archived?:                       boolean;
   deleted?:                        boolean;
   disponibleForFullVisualization?: boolean;
   availableForVisualization?:      boolean;
   skillsList:                     SkillsList[];
   salaryDescription?:              string;
}

export interface ProfileDetails {
   id:                    string;
   name:                  string;
   description?:           string;
   province?:              Category;
   web?:                   string;
   numberWorkers?:         number;
   logoUrl?:               string;
   url?:                   string;
   corporateWebsiteUrl?:   string;
   websiteUrl?:            string;
   hidden?:                boolean;
   typeIndustry?:          Category;
   country?:               Category;
   corporateResponsive?:   boolean;
   showCorporativeHeader?: boolean;
   clientId?:              number;
   followable?:            boolean;
}

export interface DataLayer {
   offer_search_page: string;
   offer_search_page_limit: string;
   region_level2_id: string;
   search_category: string;
}

export interface Item {
   applications: string;
   author: Author;
   bold: boolean;
   category: Category;
   city: string;
   color: boolean;
   contractType: Category;
   executive: boolean;
   experienceMin: Category;
   id: string;
   link: string;
   province: Category;
   published: Date;
   requirementMin: string;
   salaryDescription: string;
   salaryMax: Category;
   salaryMin: Category;
   salaryPeriod: Category;
   study: Category;
   subSegment: number;
   subcategory: Category;
   title: string;
   updated: Date;
   urgent: boolean;
   workDay: Category;
}

export interface Author {
   corporateResponsive: boolean;
   id: string;
   logoUrl?: string;
   name: string;
   showCorporativeHeader: boolean;
   uri: string;
}

export interface Category {
   id: number;
   value: string;
}

export interface Pay {
   amount: number;
   amountId: number;
   amountValue: string;
   periodId: number;
   periodValue: string;
}

export interface Profile {
   clientId: number;
   corporateResponsive: boolean;
   corporateWebsiteUrl: string;
   country: Category;
   description: string;
   followable: boolean;
   hidden: boolean;
   id: string;
   logoUrl: string;
   name: string;
   numberWorkers: number;
   province: Category;
   showCorporativeHeader: boolean;
   typeIndustry: Category;
   url: string;
   web: string;
   websiteUrl: string;
}

export interface SkillsList {
   skill: string;
}

export interface Upsellings {
   highlightColor: boolean;
   highlightHomeMonth: boolean;
   highlightHomeWeek: boolean;
   highlightLogo: boolean;
   highlightStandingOffer: boolean;
   highlightSubcategory: boolean;
   highlightUrgent: boolean;
}