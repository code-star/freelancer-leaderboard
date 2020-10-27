import { useState, useEffect } from "react";

export interface Entry {
  name: string;
  score: number;
  date: string;
  seed: number;
}

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
//   {
//     name: "Baz",
//     score: 10000,
//     date: "2020-10-17T17:04:44.936Z",
//     seed: 4,
//   },
//   {
//     name: "Bat",
//     score: 10000,
//     date: "2020-10-17T17:04:44.936Z",
//     seed: 4,
//   },
//   {
//     name: "Foo",
//     score: 10000,
//     date: "2020-10-17T17:04:44.936Z",
//     seed: 4,
//   },
//   {
//     name: "Bar",
//     score: 10000,
//     date: "2020-10-17T17:04:44.936Z",
//     seed: 4,
//   },
//   {
//     name: "Baz",
//     score: 10000,
//     date: "2020-10-17T17:04:44.936Z",
//     seed: 4,
//   },
//   {
//     name: "Bat",
//     score: 10000,
//     date: "2020-10-17T17:04:44.936Z",
//     seed: 4,
//   },
//   {
//     name: "Foo",
//     score: 10000,
//     date: "2020-10-17T17:04:44.936Z",
//     seed: 4,
//   },
//   {
//     name: "Bar",
//     score: 10000,
//     date: "2020-10-17T17:04:44.936Z",
//     seed: 4,
//   },
//   {
//     name: "Baz",
//     score: 10000,
//     date: "2020-10-17T17:04:44.936Z",
//     seed: 4,
//   },
//   {
//     name: "Bat",
//     score: 10000,
//     date: "2020-10-17T17:04:44.936Z",
//     seed: 4,
//   },
//   {
//     name: "Foo",
//     score: 10000,
//     date: "2020-10-17T17:04:44.936Z",
//     seed: 4,
//   },
//   {
//     name: "Bar",
//     score: 10000,
//     date: "2020-10-17T17:04:44.936Z",
//     seed: 4,
//   },
//   {
//     name: "Baz",
//     score: 10000,
//     date: "2020-10-17T17:04:44.936Z",
//     seed: 4,
//   },
//   {
//     name: "Bat",
//     score: 10000,
//     date: "2020-10-17T17:04:44.936Z",
//     seed: 4,
//   },
//   {
//     name: "Foo",
//     score: 10000,
//     date: "2020-10-17T17:04:44.936Z",
//     seed: 4,
//   },
//   {
//     name: "Bar",
//     score: 10000,
//     date: "2020-10-17T17:04:44.936Z",
//     seed: 4,
//   },
//   {
//     name: "Baz",
//     score: 10000,
//     date: "2020-10-17T17:04:44.936Z",
//     seed: 4,
//   },
//   {
//     name: "Bat",
//     score: 10000,
//     date: "2020-10-17T17:04:44.936Z",
//     seed: 4,
//   },
//   {
//     name: "Foo",
//     score: 10000,
//     date: "2020-10-17T17:04:44.936Z",
//     seed: 4,
//   },
//   {
//     name: "Bar",
//     score: 10000,
//     date: "2020-10-17T17:04:44.936Z",
//     seed: 4,
//   },
//   {
//     name: "Baz",
//     score: 10000,
//     date: "2020-10-17T17:04:44.936Z",
//     seed: 4,
//   },
  {
    name: "Bat",
    score: 11000,
    date: "2020-10-17T17:04:44.936Z",
    seed: 4,
  },
];

const sortEntry = (entry: Entry, otherEntry: Entry): number => entry.score - otherEntry.score;

const useLeaderboard = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [error, setError] = useState<
    { errorMessage: string; technicalMessage?: string } | undefined
  >();

  useEffect(() => {
    async function fetchData() {
      // TODO fix CORS
      try {
        const response = await fetch(
          "http://localhost:9009/?get=https://u3jbutkvth.execute-api.eu-west-1.amazonaws.com/prod/scores?seed=4"
          // "https://u3jbutkvth.execute-api.eu-west-1.amazonaws.com/prod/scores?seed=4"
        ).then((data) => data.json());

        // TODO update every n seconds
        if (response.length > 0) {
          setEntries(response.sort(sortEntry).reverse());
          setEntries(mockResponse.sort(sortEntry).reverse());
        } else {
          setError({ errorMessage: "Could not update leaderboard" });
        }
      } catch (err) {
        setError({
          errorMessage: "Could not update leaderboard",
          technicalMessage: err.toString(),
        });
      }
    }
    fetchData();
  }, []);

  return { entries, error };
};

export default useLeaderboard;
