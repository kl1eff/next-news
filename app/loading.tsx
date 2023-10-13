import Spinner from "@/components/Spinner";

export default function Loading() {
  return (
    <div className="h-30 md:h-72">
      <div className="mx-auto w-fit mt-10">
        <Spinner />
      </div>
    </div>
  )
}