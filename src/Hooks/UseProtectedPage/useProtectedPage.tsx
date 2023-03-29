import {api} from '../../lib/axios'

interface AuthData {
  accessToken: string;
}

export async function useProtectedPage (email: string,password: string): Promise<AuthData | Error> {
  try {
    const { data } = await api.post("users/login", { data: { email, password } });

    if (data) {
      return data;
    }
    return new Error("Erro");

  } catch (error) {
    return new Error(
      (error as { message: string }).message || "Erro ao seu login"
    );
  }
};

