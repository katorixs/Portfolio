# Figma Implementation Rules

When implementing UI from Figma:

1. Figma is the source of truth.
2. Always use get_design_context before implementation.
3. Always use get_screenshot before implementation.
4. Use get_metadata if design context is truncated.
5. Download and use real Figma assets.
6. Never create placeholder images when Figma assets are available.
7. Never replace Figma icons with icon libraries.
8. Never redesign the provided UI.
9. Prioritize 1:1 visual fidelity.
10. After implementation, compare the result against Figma.
11. Fix visual mismatches autonomously.
12. Repeat screenshot → compare → fix until major mismatches are gone.
13. Do not ask the user for information that can be obtained through Figma MCP.
14. Only ask the user when a genuine blocker cannot be resolved automatically.
15. A successful build does not mean the task is visually complete.


