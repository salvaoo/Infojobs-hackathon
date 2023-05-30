import { ProfileProps } from '@/types/profile';
import { atom } from 'recoil';

export const defaultProfile: ProfileProps = {
   curriculum: {
      id: 0,
      code: "",
      name: "",
      principal: false,
      completed: false,
      incompleteSteps: [],
   },
   cvText: "",
   education: [],
   experience: [],
   futurejob: {
      working: false,
      employmentStatus: "",
      motivationToChange: "",
      futureJobGoals: "",
      yearsOfExperience: "",
      lastJobSearch: "",
      lastJobSearchDetails: "",
      preferredPosition: "",
      subcategories: [],
      workDay: "",
      availabilityToChangeHomeAddress: "",
      availabilityToTravel: "",
      preferredDestinations: [],
      salaryPeriod: "",
      salaryMin: "",
      preferredSalary: "",
   },
   personaldata: {
      name: "",
      surname1: "",
      surname2: "",
      nationalIdentityCardType: "",
      nationalIdentityCard: "",
      birthDay: new Date(),
      gender: "",
      country: "",
      province: "",
      cityCode: "",
      cityName: "",
      zipCode: "",
      preferredContactPhone: "",
      mobilePhone: "",
      webpages: [],
      driverLicenses: [],
      vehicleOwner: false,
      freelance: false,
      nationalities: [],
      email: "",
   },
   skill: {
      expertise: [],
      language: [],
   }
}

export const profileState = atom({
   key: "profileState",
   default: {} as ProfileProps,
})