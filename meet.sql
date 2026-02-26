CREATE TABLE app_profile (
    -- 1. 基础识别信息
                              id BIGSERIAL PRIMARY KEY,
                              lang TEXT NOT NULL,                   -- 注释：展示语言
                              nickname TEXT NOT NULL,                   -- 注释：展示昵称
                              photo_main_url TEXT,                      -- 注释：封面主图URL
                              photo_gallery_urls TEXT[],                -- 注释：副图/相册URL数组 (PostgreSQL 特有数组类型)

    -- 2. 分类与区域 (改用数字类型，建议在业务层定义常量映射)
                              country_id SMALLINT NOT NULL DEFAULT 1,   -- 注释：国家ID (1:新加坡, 2:马来西亚, 3:泰国)
                              location_id INTEGER NOT NULL,             -- 注释：具体区域ID (如 101:滨海湾, 102:乌节路)
                              category_id SMALLINT  NOT NULL DEFAULT 1,                     -- 注释：业务大类ID (1:水疗, 2:KTV, 3:夜场派对, 4:外送)
                              venue_id INTEGER NOT NULL DEFAULT 1,      -- 注释：具体场所ID（关联具体店名，如：天空会所）

    -- 3. 运营状态 (改用数字类型)
                              badge_code SMALLINT DEFAULT 0,            -- 注释：角标代码 (0:无, 1:热门hot, 2:新品new, 3:推荐recommend, 4:年龄小young)

    -- 4. 身体物理规格
                              age SMALLINT,                             -- 注释：年龄
                              height_cm SMALLINT,                       -- 注释：身高(cm)
                              weight_kg SMALLINT,                       -- 注释：体重(kg)
                              bust_size TEXT,                           -- 注释：胸围规格 (如: 34D)


    -- 5. 服务内容与详细描述
                              service_items TEXT,                       -- 注释：具体服务标签 (如: SPA, 伴游)
                              bio_description TEXT,                      -- 注释：个人简介描述
    -- 优先级排序字段 (升序逻辑：数字越小越靠前)
                              lang_sort SMALLINT DEFAULT 0,             -- 注释：语言排序优先级
                              country_sort SMALLINT DEFAULT 0,          -- 注释：国家排序优先级
                              location_sort SMALLINT DEFAULT 0,         -- 注释：区域排序优先级
                              category_sort SMALLINT DEFAULT 0,         -- 注释：分类排序优先级
                              venue_sort SMALLINT DEFAULT 0,           -- 注释：场所排序优先级
                              is_active BOOLEAN DEFAULT TRUE           -- 注释：是否启用

);
-- 为表本身增加注释
COMMENT ON TABLE app_profile IS '模特/服务人员核心信息整合表';

-- 为字段逐个增加数据库级别注释 (方便数据库管理工具查看)
COMMENT ON COLUMN app_profile.nickname IS '展示昵称';
COMMENT ON COLUMN app_profile.lang IS '语言';
COMMENT ON COLUMN app_profile.age IS '年龄';
COMMENT ON COLUMN app_profile.height_cm IS '身高(cm)';
COMMENT ON COLUMN app_profile.weight_kg IS '体重(kg)';
COMMENT ON COLUMN app_profile.bust_size IS '胸围规格';
COMMENT ON COLUMN app_profile.service_items IS '具体服务内容标签列表';
COMMENT ON COLUMN app_profile.bio_description IS '个人简介描述';
COMMENT ON COLUMN app_profile.photo_gallery_urls IS '副图URL列表，存储为TEXT数组';
COMMENT ON COLUMN app_profile.country_id IS '国家映射：1-新加坡, 2-马来西亚, 3-泰国';
COMMENT ON COLUMN app_profile.badge_code IS '角标映射：1-hot, 2-new, 3-recommend, 4-young';
COMMENT ON COLUMN app_profile.venue_id IS '具体场所ID（关联具体店名，如：天空会所）';
COMMENT ON COLUMN app_profile.is_active IS '是否启用';
-- 为新字段添加数据库注释
COMMENT ON COLUMN app_profile.lang_sort IS '语言排序优先级（数字越大越靠前）';
COMMENT ON COLUMN app_profile.country_sort IS '国家排序优先级';
COMMENT ON COLUMN app_profile.location_sort IS '区域排序优先级';
COMMENT ON COLUMN app_profile.category_sort IS '分类排序优先级';
COMMENT ON COLUMN app_profile.venue_sort IS '场所排序优先级';


-- 针对数字ID的高效复合索引
CREATE INDEX idx_profile_fast_filter ON app_profile (lang,country_id, location_id, badge_code,category_id,venue_id,is_active);
-- 创建升序优先级联合索引
-- 顺序： 语言 > 国家 > 区域 > 分类 > 场所
CREATE INDEX idx_profile_priority_asc ON app_profile (
                                                        lang_sort     ASC,  -- 语言升序
                                                        country_sort  ASC,  -- 国家升序
                                                        location_sort ASC,  -- 区域升序
                                                        category_sort ASC,  -- 分类升序
                                                        venue_sort    ASC   -- 场所升序
    );




CREATE TABLE app_contact (
                              id SERIAL PRIMARY KEY,                    -- 注释：主键ID，自增
                              contact_type SMALLINT NOT NULL,          -- 注释：联系方式类型 (1:Telegram, 2:WhatsApp)
                              contact_name TEXT,                       -- 注释：联系人显示名称（如：Sophia客服）
                              contact_url TEXT NOT NULL,               -- 注释：点击跳转的完整链接 (如 https://t.me/xxx)
                              is_active BOOLEAN DEFAULT TRUE           -- 注释：是否启用

);

-- 添加注释
COMMENT ON TABLE app_contact IS '客服联系方式表';
COMMENT ON COLUMN app_contact.contact_type IS '类型代码：1-Telegram, 2-WhatsApp';
COMMENT ON COLUMN app_contact.contact_name IS '联系人备注名称';
COMMENT ON COLUMN app_contact.contact_url IS '跳转协议链接';
COMMENT ON COLUMN app_contact.is_active IS '是否启用';

CREATE INDEX idx_contact_type ON app_contact (contact_type,is_active);



/*

INSERT INTO app_profile (

  lang,
  nickname,
  photo_main_url,
  photo_gallery_urls,
  country_id,
  location_id,
  category_id,
  venue_id,
  badge_code,
  age,
  height_cm,
  weight_kg,
  bust_size,
  service_items,
  bio_description,
  lang_sort,
  country_sort,
  location_sort,
  category_sort,
  venue_sort,
  is_active
) VALUES
('id','Isabella','https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop',NULL,1,1,1,1,1,22,160,45,'36D','3P,口爆,双飞,毒龙','娇小玲珑',0,0,0,0,0,true),
('vi','Isabella','https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop',NULL,1,1,1,1,1,22,160,45,'36D','3P,口爆,双飞,毒龙','娇小玲珑',0,0,0,0,0,true),
('ms','Isabella','https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop',NULL,1,1,1,1,1,22,160,45,'36D','3P,口爆,双飞,毒龙','娇小玲珑',0,0,0,0,0,true),
('en','Isabella','https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop',NULL,1,1,1,1,1,22,160,45,'36D','3P,口爆,双飞,毒龙','娇小玲珑',0,0,0,0,0,true),
('zh-cn','Isabella','https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop',NULL,1,1,1,1,1,22,160,45,'36D','3P,口爆,双飞,毒龙','娇小玲珑',0,0,0,0,0,true),
('ja','Isabella','https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop',NULL,1,1,1,1,1,22,160,45,'36D','3P,口爆,双飞,毒龙','娇小玲珑',0,0,0,0,0,true),
('zh-tw','Isabella','https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop',NULL,1,1,1,1,1,22,160,45,'36D','3P,口爆,双飞,毒龙','娇小玲珑',0,0,0,0,0,true),
('ko','Isabella','https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop',NULL,1,1,1,1,1,22,160,45,'36D','3P,口爆,双飞,毒龙','娇小玲珑',0,0,0,0,0,true);
*/