/* GLOBALS */

declare const __static: string;
declare const Svelto: any;

declare module NodeJS {
  interface Global {
    isQuitting?: boolean;
  }
}

/* CASH */
export type Cash = any; // ✅ ADD THIS LINE
// Use namespace merging to add properties to the existing $ variable

/* BASE OBJECTS */

export type AttachmentObj = {
  fileName: string;
  filePath: string;
};

export type AttachmentsObj = {
  [fileName: string]: AttachmentObj;
};

export type ContextKeysObj = {
  hasNote: boolean;
  isAttachmentsEditing: boolean;
  isEditorEditing: boolean;
  isEditorSplitView: boolean;
  isMultiEditorEditing: boolean;
  isNoteDeleted: boolean;
  isNoteFavorited: boolean;
  isNotePinned: boolean;
  isTagsEditing: boolean;
  isNoteTemplate: boolean;
  theme: string;
};

export type MonacoEditor =
  import("monaco-editor/esm/vs/editor/editor.api.js").editor.ICodeEditor & {
    getChangeDate: () => Date | undefined;
    getFilePath: () => string;
  };

export type NoteMetadataObj = {
  attachments: string[];
  created: Date;
  modified: Date;
  deleted: boolean;
  favorited: boolean;
  pinned: boolean;
  stat: import("fs").Stats;
  tags: string[];
  title: string;
};

export type NoteObj = {
  content: string;
  filePath: string;
  checksum: number;
  plainContent: string;
  metadata: NoteMetadataObj;
};

type NotesObj = {
  [filePath: string]: NoteObj;
};

export type QuickPanelResultsRawItem = {
  title: string;
  description?: string;
};

export type QuickPanelResultsNoteItem = NoteObj;

export type QuickPanelResultsAttachmentItem = AttachmentObj;

export type QuickPanelResultsItem =
  | QuickPanelResultsRawItem
  | QuickPanelResultsNoteItem
  | QuickPanelResultsAttachmentItem;

export type QuickPanelResults = {
  empty: string;
  items: QuickPanelResultsItem[];
};

export type TagObj = {
  collapsed: boolean;
  name: string;
  notes: NoteObj[];
  path: string;
  icon?: string;
  iconCollapsed?: string;
  tags: {
    [name: string]: TagObj;
  };
};

export type TagsObj = {
  [filePath: string]: TagObj;
};

/* MAIN CONTAINERS STATES */

export type AttachmentState = {};

export type AttachmentsState = {
  attachments: AttachmentsObj;
  editing: boolean;
};

export type ClipboardState = {};

export type ContextKeysState = {};

export type CWDState = {};

export type EditorState = {
  monaco?: MonacoEditor;
  editing: boolean;
  split: boolean;
};

export type EditorEditingState = {
  filePath: string;
  model:
    | import("monaco-editor/esm/vs/editor/editor.api.js").editor.ITextModel
    | null;
  view:
    | import("monaco-editor/esm/vs/editor/editor.api.js").editor.ICodeEditorViewState
    | null;
};

export type EditorPreviewingState = {
  filePath: string;
  scrollTop: number;
};

export type ExportState = {};

export type ImportState = {};

export type LoadingState = {
  loading: boolean;
};

export type MultiEditorState = {
  notes: NoteObj[];
  skippable: boolean;
};

export type NoteState = {
  note: NoteObj | undefined;
};

export type NotesState = {
  notes: NotesObj;
};

export type QuickPanelState = {
  open: boolean;
  query: string;
  itemIndex: number;
  results: QuickPanelResults;
};

export type SearchState = {
  query: string;
  notes: NoteObj[];
};

export type SkeletonState = {};

export type SortingState = {
  by: import("@renderer/utils/sorting").SortingBys;
  type: import("@renderer/utils/sorting").SortingTypes;
};

export type TagState = {
  tag: string;
};

export type TagsState = {
  tags: TagsObj;
  editing: boolean;
};

export type ThemeState = {
  theme: string;
};

export type ThemesState = {
  themes: string[];
};

export type TrashState = {};

export type TutorialState = {};

export type WindowState = {
  focus: boolean;
  fullscreen: boolean;
  sidebar: boolean;
  zen: boolean;
};

/* MAIN */

export type MainState = {
  attachment: AttachmentState;
  attachments: AttachmentsState;
  clipboard: ClipboardState;
  contextKeys: ContextKeysState;
  editor: EditorState;
  export: ExportState;
  import: ImportState;
  loading: LoadingState;
  multiEditor: MultiEditorState;
  note: NoteState;
  notes: NotesState;
  quickPanel: QuickPanelState;
  search: SearchState;
  skeleton: SkeletonState;
  sorting: SortingState;
  tag: TagState;
  tags: TagsState;
  theme: ThemeState;
  themes: ThemesState;
  trash: TrashState;
  tutorial: TutorialState;
  window: WindowState;
};

export type MainCTX = {
  state: MainState;
  suspend();
  unsuspend();
  suspendMiddlewares();
  unsuspendMiddlewares();
  reset();
  waitIdle();
  attachment: import("@renderer/containers/main/attachment").default;
  attachments: import("@renderer/containers/main/attachments").default;
  clipboard: import("@renderer/containers/main/clipboard").default;
  contextKeys: import("@renderer/containers/main/context_keys").default;
  cwd: import("@renderer/containers/main/cwd").default;
  editor: import("@renderer/containers/main/editor").default;
  export: import("@renderer/containers/main/export").default;
  import: import("@renderer/containers/main/import").default;
  loading: import("@renderer/containers/main/loading").default;
  multiEditor: import("@renderer/containers/main/multi_editor").default;
  note: import("@renderer/containers/main/note").default;
  notes: import("@renderer/containers/main/notes").default;
  quickPanel: import("@renderer/containers/main/quick_panel").default;
  search: import("@renderer/containers/main/search").default;
  skeleton: import("@renderer/containers/main/skeleton").default;
  sorting: import("@renderer/containers/main/sorting").default;
  tag: import("@renderer/containers/main/tag").default;
  tags: import("@renderer/containers/main/tags").default;
  theme: import("@renderer/containers/main/theme").default;
  themes: import("@renderer/containers/main/themes").default;
  trash: import("@renderer/containers/main/trash").default;
  tutorial: import("@renderer/containers/main/tutorial").default;
  window: import("@renderer/containers/main/window").default;
};

export type IMain = MainCTX & { ctx: MainCTX };

/* OTHERS */

export type PrintOptions = {
  html?: string;
  src?: string;
  dst: string;
};
