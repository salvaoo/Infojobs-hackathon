import { atom } from 'recoil';

export interface CurriculumProps {
   id: number,
   code: string,
   name: string,
   principal: boolean,
   completed: boolean,
   incompleteSteps?: [],
}

export const defaultCurriculum: CurriculumProps = {
   id: 0,
   code: "",
   name: "",
   principal: true,
   completed: true,
   incompleteSteps: []
}

export const curriculumState = atom({
   key: "curriculumState",
   default: defaultCurriculum,
})