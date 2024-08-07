import { NoteForm } from "./NoteForm";
import { NoteData, Tag } from "./App";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tags: Tag) => void;
  availableTags: Tag[];
};

export default function NewNote({
  onSubmit,
  onAddTag,
  availableTags,
}: NewNoteProps) {
  return (
    <>
      <h1 className="mb-4">NewNote</h1>

      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
}
