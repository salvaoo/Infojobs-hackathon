import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"

export default function StepContent(props: {
   step: number;
}) {
   const { step } = props;

   switch (step) {
      case 1:
         return (
            <Card className="border-0 shadow-none">
               <CardHeader className="px-0">
                  <CardTitle>Donde quieres trabajar?</CardTitle>
                  <CardDescription>Selecciona el lugar donde te interesa ver las ofertas de trabajo disponibles.</CardDescription>
               </CardHeader>
               <CardContent className="px-0">
                  <p>Card Content</p>
               </CardContent>
               <CardFooter className="px-0">
                  <p>Card Footer</p>
               </CardFooter>
            </Card>
         )
      case 2:
         return (
            <p>Step 2</p>
         )
      default:
         return (
            <p>Step default {step}</p>
         )
   }
}