import { createClient } from "@/common/utils/server";

interface GetAchievementsDataProps {
  category?: string;
  search?: string;
}

export const getAchievementsData = async ({
  category,
  search,
}: GetAchievementsDataProps) => {
  const supabase = createClient();

  let query = supabase.from("achievements").select();

  if (category) {
    query = query.eq("category", category);
  }

  if (search) {
    query = query.ilike("name", `%${search}%`);
  }

  const { data, error } = await query; 
  console.log('data: ', data, error);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
