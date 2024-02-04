import { useGetUserQuery, useGetUsersQuery } from "../redux/service/userService"
import { UserType } from "../types"





const Users = () => {
   
     const {data, error,isLoading} = useGetUserQuery(6)

  return (
    <div>
        {isLoading &&  <p>Loading....</p>}
        {error &&  <p className="text-red-500">Somthing went wrong</p>}

        {data && (
                <div>
                    <img src={data.avatar_url} alt="" />
                    <p>{data?.login}</p>
                </div>
        )}
    </div>
  )
}

export default Users