import { JOBTYPES } from "@/constant";
import { z } from "zod";

export const jobFormSchema = z.object({
  roles: z
    .string({ required_error: "Job title is requirement" })
    .min(3, { message: "Job title at least must be 3 character" }),
  jobType: z.enum(JOBTYPES, { required_error: "You need select a job type" }),
  salaryFrom: z.string({ required_error: "Salary From is required" }),
  salaryTo: z.string({ required_error: "Salary To is required" }),
  categoryId: z.string({ required_error: "You need to select a category" }),
  requiredSkill: z.string().array().nonempty({ message: "Couldn't be empty" }),
  jobDesc: z
    .string({ required_error: "Job Description is required" })
    .min(10, { message: "Job Description at lesat must be 10 character" }),
  responsibility: z
    .string({ required_error: "Responsibility is required" })
    .min(10, { message: "Responsibility at lesat must be 10 character" }),
  whoYouAre: z
    .string({ required_error: "who you are is required" })
    .min(10, { message: "who you are at lesat must be 10 character" }),
  niceToHave: z
    .string({ required_error: "Nice to have is required" })
    .min(10, { message: "Job Description at lesat must be 10 character" }),
  benefits: z
    .object({
      benefit: z.string(),
      description: z.string(),
    })
    .array()
    .nonempty({ message: "Benefit must no empty" }),
});
