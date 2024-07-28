"use client";

import { jobFormSchema } from "@/lib/form-schema";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { log } from "console";
import { ArrowLeftIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FieldInput from "@/components/organnism/FieldInput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { JOBTYPES } from "@/constant";
import InputSkills from "@/components/organnism/InputSkills";
interface PostJobPageProps {}

const PostJobPage: FC<PostJobPageProps> = ({}) => {
  const form = useForm<z.infer<typeof jobFormSchema>>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      requiredSkill: [],
    },
  });

  const onSubmit = (val: z.infer<typeof jobFormSchema>) => {
    console.log(val);
  };
  return (
    <div>
      <div className="inline-flex items-center gap-2 cursor-pointer hover:text-yellow-400">
        <ArrowLeftIcon className="w-7 h-7" />
        <span className="text-2xl font-semibold ">Post a job</span>
      </div>

      <div className="my-5">
        <div className="text-2xl font-semibold">Basic Information</div>
        <div className="text-gray-400">
          List out your top perks and benefits
        </div>
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-5 pt-6 space-y-6"
        >
          <FieldInput
            title="Job Title"
            subtitle="Job titles must be describe one position"
          >
            <FormField
              control={form.control}
              name="roles"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="w-[450px]"
                      placeholder="e.g. Software Engineer"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>At least 80 characters</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>
          <FieldInput
            title="Type of Employment"
            subtitle="You can select type of employment"
          >
            <FormField
              control={form.control}
              name="jobType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {JOBTYPES.map((item: string, i: number) => (
                        <FormItem
                          key={item + i}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={item} />
                          </FormControl>
                          <FormLabel className="font-normal">{item}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>

          <FieldInput
            title="Salary"
            subtitle="Please specify the estimated salary range for the role."
          >
            <div className="w-[450px] flex flex-row justify-between items-center">
              <FormField
                control={form.control}
                name="salaryFrom"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className="w-full" placeholder="$100" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <span className="text-center mr-3 ml-3">To</span>
              <FormField
                control={form.control}
                name="salaryTo"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="w-full"
                        placeholder="$1000"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </FieldInput>

          <FieldInput
            title="Categories"
            subtitle="You can select job categories"
          >
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Job Categories</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-[450px]">
                        <SelectValue placeholder="Select Job Categories" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent></SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>
          <FieldInput
            title="Required Skills"
            subtitle="Add required skills for the job"
          >
            <InputSkills form={form} name="requiredSkills" label="Add Skills" />
          </FieldInput>
        </form>
      </Form>
    </div>
  );
};

export default PostJobPage;
