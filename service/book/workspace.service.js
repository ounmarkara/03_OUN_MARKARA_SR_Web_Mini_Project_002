import headerToken from "@/app/api/headerToken";

export const getAllWorkSpace = async () => {
  // since headerToken is an async function that why we need to use await
  const header = await headerToken();
  const res = await fetch(
    `${process.env.NEXT_APIURL}/workspaces?pageNo=0&pageSize=10&sortBy=workspaceId&sortDirection=ASC`,
    {
      headers: header,
    }
  );
  const data = await res.json();
  return data;
};
