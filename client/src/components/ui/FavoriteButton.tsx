import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FC, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

import { Estate } from "@/types";
import { useAuthStore } from "@/store/authStore";
import { GET_USER } from "@/graphql/queries/users";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "@/graphql/mutations/users";

type Props = {
  estateId: string;
  className?: string;
};

const FavoriteButton: FC<Props> = ({ estateId, className }) => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const { loading } = useQuery(GET_USER, {
    variables: { _id: user?._id },
    fetchPolicy: 'no-cache',
    onCompleted: ({ user }) => {
      user?.favorites.forEach((estate: Estate) => {
        if (estateId === estate._id) 
        return setIsFavorite(true);
      });
    },
  });

  const [addFavorite, { loading: addLoading }] = useMutation(ADD_FAVORITE, {
    onCompleted: () => setIsFavorite(true),
    onError: () => toast.error("Somethings went wrong."),
  });

  const [removeFavorite, { loading: removeLoading }] = useMutation(
    REMOVE_FAVORITE,
    {
      onCompleted: () => setIsFavorite(false),
      onError: () => toast.error("Somethings went wrong."),
    }
  );

  const handleFavorite = () => {
    if (!user) return navigate("/login");

    if (isFavorite) removeFavorite({ variables: { _id: user._id, estateId } });
    else addFavorite({ variables: { _id: user._id, estateId } });
  };

  if (loading) return null;

  return (
    <button
      disabled={addLoading || removeLoading || loading}
      onClick={handleFavorite}
      className={
        "absolute top-2 right-2 z-30 text-4xl rounded-full hover:text-textColor-soft transition-all duration-200 " +
        className
      }
    >
      {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
    </button>
  );
};

export default FavoriteButton;
