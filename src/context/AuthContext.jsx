import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../supabase/client";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const signUp = async (fullName, email, password, category) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            fullName: fullName,
            category: category,
          },
        },
      });

      if (error) {
        console.log(error);
      } else {
        return data;
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const signIn = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        console.log(error);
      } else {
        // console.log(data);
        navigate("/");
        return data;
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          queryParams: {
            prompt: "select_account",
          },
        },
      });
      if (error) throw new Error("An error has ocurred during Authentication");

      return data;
    } catch (error) {
      console.error(error.message);
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw new Error("An error has ocurred during Signout");
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        setUser(null);
        navigate("/login");
      } else if (session) {
        setUser(session);
        navigate("/");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ signInWithGoogle, signOut, user, signUp, signIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
