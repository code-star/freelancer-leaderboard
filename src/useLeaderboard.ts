import { useState, useEffect } from "react";

export interface Entry {
  name: string;
  score: number;
  date: string;
  seed: number;
}
type LeaderboardError =
  | { errorMessage: string; technicalMessage?: string }
  | undefined;

const REFRESH_MS = 30 * 1000;

const mockResponse: Entry[] = [
  {
    name: "Foo",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Bar",
    score: 9000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Baz",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Bat",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Foo",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Bar",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Baz",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Bat",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Foo",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Bar",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Baz",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Bat",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Foo",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Bar",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Baz",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Bat",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Foo",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Bar",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Baz",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Bat",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Foo",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Bar",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Baz",
    score: 10000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
  {
    name: "Bat",
    score: 11000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
];

const sortEntry = (entry: Entry, otherEntry: Entry): number =>
  entry.score - otherEntry.score;

const forceWait = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

const createFetchData = (
  setEntries: (entries: Entry[]) => void,
  setIsLoading: (_: boolean) => void,
  setError: (_: LeaderboardError) => void
) => async () => {
  setIsLoading(true);
  try {
    const response = await fetch(
      "https://u3jbutkvth.execute-api.eu-west-1.amazonaws.com/prod/scores?seed=4"
    ).then((data) => data.json());

    if (response.length > 0) {
      setEntries(response.sort(sortEntry).reverse());
    } else {
      setError({ errorMessage: "Could not update leaderboard" });
    }
  } catch (err) {
    setError({
      errorMessage: "Could not update leaderboard",
      technicalMessage: err.toString(),
    });
  }
    // setEntries(mockResponse.sort(sortEntry).reverse());
  await forceWait(); // Show progressbar a bit longer
  setIsLoading(false);
};

// TODO clean up timer on unmount
const useLeaderboard = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<LeaderboardError>();

  useEffect(() => {
    const fetchData = createFetchData(setEntries, setIsLoading, setError);
    const timer = setInterval(fetchData, REFRESH_MS);
    fetchData();
  }, []);

  return { entries, isLoading, error };
};

export default useLeaderboard;
