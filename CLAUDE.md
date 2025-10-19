# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a **Development Coach System Prompts Kit** - a structured collection of LLM prompts designed to transform AI assistants into development coaches using the 4W+ methodology (Who, Why, What, How).

**Purpose**: Educational toolkit for implementing AI-assisted development workflows with best practices, quality checklists, and technical knowledge bases.

## Repository Structure

```
.
├── system-prompt-dev-coach.md      # Main prompt (~8.5KB) - Complete system with knowledge base
├── system-prompt-resumido.md       # Condensed version (~2KB) - For token-limited contexts
├── resumo-adicoes.md              # Technical documentation (~3KB) - Addition reference
├── guia-de-uso.md                 # Usage guide (~4KB) - Integration tutorials
└── README.md                      # Index and navigation
```

## Core Concepts

### 4W+ Methodology Framework

The system implements a structured requirements gathering and implementation approach:

1. **WHO**: Define technical specialist profile and target audience
2. **WHY**: Establish core problem, business value, and success metrics
3. **WHAT**: Map complete stack, requirements, constraints, and design decisions
4. **HOW**: Plan architecture, patterns, delivery strategy, and output format

### Four-Phase Workflow

1. **Discovery** (5-10min): Strategic requirement gathering through targeted questions
2. **Architecture** (10-15min): Design planning with active research and best practice validation
3. **Implementation** (variable): Production-ready code following clean code principles
4. **Validation**: Quality checklist application across 10 categories (120+ verification items)

### Knowledge Base Components

The main prompt includes pre-built technical implementations:

- **Internationalization (i18n)**: Complete code for Next.js, React, Vue with regional formatting and RTL support
- **Accessible Dark Mode**: CSS variable systems, theme hooks, toggle components, FOUC prevention
- **Quality Checklist**: Comprehensive validation across Accessibility, SEO, UX, Design System, Performance, Security, PWA, and Testing

## Usage Patterns

### Integration Points

The prompts are designed for integration into:
- **Cursor IDE**: Via `.cursorrules` file
- **Claude Projects**: Via Custom Instructions + Project Knowledge
- **ChatGPT Custom GPTs**: Via GPT Instructions
- **General LLM Tools**: As system prompts

### File Selection Guide

- Use `system-prompt-dev-coach.md` for full coaching experience (projects with sufficient context)
- Use `system-prompt-resumido.md` when token limits are a concern
- Reference `guia-de-uso.md` for platform-specific integration instructions
- Reference `resumo-adicoes.md` for understanding the technical additions included

## Working with This Repository

### Modifying Prompts

When updating prompts, maintain:
- The 4W+ methodology structure
- The four-phase workflow process
- Clear separation between methodology (process) and knowledge base (technical content)
- Consistent formatting with emoji markers for visual scanning

### Adding Knowledge Base Content

New technical implementations should follow the existing pattern:
1. Place in dedicated section within main prompt
2. Include complete working code examples
3. Provide framework-specific variations where applicable
4. Document edge cases and accessibility considerations

### Testing Changes

Before committing prompt modifications:
1. Test with representative development queries
2. Verify the 4W+ workflow still executes correctly
3. Ensure questions are strategic and context-gathering
4. Validate that quality checklists remain comprehensive
5. Check that technical knowledge base examples remain current

### Customization for Specific Contexts

The prompts support organizational customization through dedicated sections:
- **Company Context**: Standard stack, code style, review process, deployment workflow
- **Project Context**: SaaS type, specific stack, scale requirements, compliance needs

Add these sections at the prompt beginning for context-specific behavior.

## Content Philosophy

This repository follows these principles:
- **Education over automation**: Teach while implementing
- **Strategic questioning**: Understand before acting
- **Evidence-based decisions**: Research and validate approaches
- **Production quality**: Code should be maintainable and secure
- **Systematic validation**: Apply comprehensive quality gates

## Common Workflows

### Adding New Framework Support
1. Study existing framework examples (Next.js, React, Vue patterns)
2. Create equivalent implementations maintaining feature parity
3. Document framework-specific considerations
4. Update main prompt's knowledge base section

### Expanding Quality Checklists
1. Identify new quality category or expand existing
2. Add specific, verifiable checklist items
3. Include validation methods or tools
4. Maintain categorical organization (A11y, SEO, UX, etc.)

### Creating Specialized Versions
1. Fork `system-prompt-dev-coach.md` as base
2. Adjust WHO section for specialized domain
3. Tailor quality checklists to domain requirements
4. Update knowledge base with domain-specific examples

## Version Management

Current version: 1.0.0

When making significant updates:
- Update version number in README.md
- Document changes in a changelog if creating one
- Maintain backward compatibility in methodology structure
- Consider token count impact on condensed version
