import { Stack } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";

const ChatLoading = () => {
  return (
    <Stack>
      {Array(10)
        .fill(1)
        .map((_, index) => {
          return <Skeleton key={index} height="45px" />;
        })}
    </Stack>
  );
};

export default ChatLoading;
