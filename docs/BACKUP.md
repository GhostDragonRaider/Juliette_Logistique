# Projekt backup – belső rendszer előtti állapot

A Phase 1 belső felhasználói rendszer fejlesztése előtt a következő git tag készült:

- **Tag:** `backup/pre-belso-rendszer-2026-10-17`
- **Commit üzenet:** `chore: snapshot before belső felhasználói rendszer (phase 1)`

## Visszaállítás (csak szándékosan)

```bash
git fetch origin backup/pre-belso-rendszer-2026-10-17
git checkout backup/pre-belso-rendszer-2026-10-17
```

Új ágon dolgozva:

```bash
git checkout -b helyreallitas-pre-belso main
git reset --hard backup/pre-belso-rendszer-2026-10-17
```

**Figyelem:** a hard reset elveti a későbbi commitokat az aktuális branch-en.

## Aktív fejlesztési branch

A belső rendszer Phase 1 munka: `cursor/belso-rendszer-fazis1-5b77`
