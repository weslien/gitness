ALTER TABLE gitspaces ADD COLUMN gits_has_git_changes BOOLEAN;
ALTER TABLE gitspaces DROP COLUMN gits_tracked_changes;