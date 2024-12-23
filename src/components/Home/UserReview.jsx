import UserReviewCard from "../UserReviewCard";

const UserReview = () => {
  return (
    <div className="lg:flex items-center justify-between gap-4">
      <UserReviewCard />
      <UserReviewCard />
      <UserReviewCard />
      <UserReviewCard />
    </div>
  );
}

export default UserReview