# Astro Starter Kit: Minimal

```sh
pnpm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## API

### POST /api/profiles

Profile 列表查询（支持 cursor 滚动翻页）。

**必传字段**

- `lang`: string
- `country_id`: number
- `category_id`: number
- `venue_id`: number
- `badge_code`: number (1: 热门, 2: 新品, 3: 推荐, 4: 年龄小)
- `is_active`: boolean

**可选字段**

- `location_id`: number（不传为全部）
- `limit`: number（默认 20，范围 1~100）
- `cursor`: object（用于下一页）
  - `lang_sort`, `country_sort`, `location_sort`, `category_sort`, `venue_sort`, `id`

**请求示例**

```json
{
  "lang": "zh",
  "country_id": 1,
  "category_id": 1,
  "venue_id": 1002101,
  "badge_code": 1,
  "is_active": true,
  "limit": 20,
  "cursor": {
    "lang_sort": 0,
    "country_sort": 0,
    "location_sort": 0,
    "category_sort": 0,
    "venue_sort": 0,
    "id": 123
  }
}
```

**响应示例**

```json
{
  "ok": true,
  "data": [],
  "limit": 20,
  "next_cursor": {
    "lang_sort": 0,
    "country_sort": 0,
    "location_sort": 0,
    "category_sort": 0,
    "venue_sort": 0,
    "id": 123
  }
}
```
https://streak-win.vercel.app/zh-cn

https://meet-rho-three.vercel.app/zh-cn/