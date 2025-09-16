import { createClient } from "@/common/utils/server";

export const getProjectsData = async () => {
  const supabase = createClient();

  let { data } = await supabase.from("Projects").select();
  
  return data;
};

export const getProjectsDataBySlug = async (slug: string) => {
  const supabase = createClient();

  let { data } = await supabase.from("Projects").select().eq("slug", slug).single();
  return data;
};
