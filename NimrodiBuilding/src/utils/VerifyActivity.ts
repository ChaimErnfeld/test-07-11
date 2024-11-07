import roles from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
  //FILL HERE 3.
  const activityIndex = activities.indexOf(activity);
  const roleIndex = roles.indexOf(role);
  if (roleIndex >= activityIndex) {
    return true;
  } else {
    return false;
  }
};

export default useIsVerified;
