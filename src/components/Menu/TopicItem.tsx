import { Topic } from "../../types/topic.type";

type Props = {
  topic: Topic;
  selectedTopic: Topic;
  setSelectedTopic: (param: Topic) => void;
};

export default function TopicItem({
  topic,
  selectedTopic,
  setSelectedTopic,
}: Props) {
  const { id, name, image, words } = topic;

  return (
    <div
      key={name}
      className="grid cursor-pointer place-items-center rounded-3xl border-[5px] border-gray-400 bg-gray-600 p-4 text-center"
      onClick={() =>
        setSelectedTopic({
          id,
          name,
          image,
          words,
        })
      }
      style={{
        borderColor: selectedTopic.id === id ? "#22c55e" : "",
      }}
    >
      <p className="capitalize text-white/80">{name}</p>
      <div className="mt-5 h-[120px]">
        <img src={image} alt={name} className="h-full object-cover" />
      </div>
    </div>
  );
}
