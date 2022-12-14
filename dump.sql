PGDMP         :                z            shortly #   14.5 (Ubuntu 14.5-0ubuntu0.22.04.1) #   14.5 (Ubuntu 14.5-0ubuntu0.22.04.1) &    E           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            F           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            G           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            H           1262    16605    shortly    DATABASE     \   CREATE DATABASE shortly WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE shortly;
                postgres    false            ?            1259    16636    sessions    TABLE     ?   CREATE TABLE public.sessions (
    session_id integer NOT NULL,
    user_id integer NOT NULL,
    created_at date DEFAULT now() NOT NULL,
    token text NOT NULL
);
    DROP TABLE public.sessions;
       public         heap    postgres    false            ?            1259    16635    sessions_session_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.sessions_session_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.sessions_session_id_seq;
       public          postgres    false    214            I           0    0    sessions_session_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.sessions_session_id_seq OWNED BY public.sessions.session_id;
          public          postgres    false    213            ?            1259    16621    urls    TABLE     ?   CREATE TABLE public.urls (
    url_id integer NOT NULL,
    user_id integer NOT NULL,
    url text NOT NULL,
    short_url text NOT NULL,
    created_at date DEFAULT now() NOT NULL
);
    DROP TABLE public.urls;
       public         heap    postgres    false            ?            1259    16620    urls_url_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.urls_url_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.urls_url_id_seq;
       public          postgres    false    212            J           0    0    urls_url_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.urls_url_id_seq OWNED BY public.urls.url_id;
          public          postgres    false    211            ?            1259    16607    users    TABLE     ?   CREATE TABLE public.users (
    user_id integer NOT NULL,
    name character varying(60) NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    created_at date DEFAULT now() NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            ?            1259    16606    users_user_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.users_user_id_seq;
       public          postgres    false    210            K           0    0    users_user_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;
          public          postgres    false    209            ?            1259    16691    visits    TABLE     ?   CREATE TABLE public.visits (
    visit_id integer NOT NULL,
    url_id integer NOT NULL,
    user_id integer NOT NULL,
    visit_count integer DEFAULT 0 NOT NULL
);
    DROP TABLE public.visits;
       public         heap    postgres    false            ?            1259    16690    visits_visit_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.visits_visit_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.visits_visit_id_seq;
       public          postgres    false    216            L           0    0    visits_visit_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.visits_visit_id_seq OWNED BY public.visits.visit_id;
          public          postgres    false    215            ?           2604    16639    sessions session_id    DEFAULT     z   ALTER TABLE ONLY public.sessions ALTER COLUMN session_id SET DEFAULT nextval('public.sessions_session_id_seq'::regclass);
 B   ALTER TABLE public.sessions ALTER COLUMN session_id DROP DEFAULT;
       public          postgres    false    213    214    214            ?           2604    16624    urls url_id    DEFAULT     j   ALTER TABLE ONLY public.urls ALTER COLUMN url_id SET DEFAULT nextval('public.urls_url_id_seq'::regclass);
 :   ALTER TABLE public.urls ALTER COLUMN url_id DROP DEFAULT;
       public          postgres    false    211    212    212            ?           2604    16610    users user_id    DEFAULT     n   ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);
 <   ALTER TABLE public.users ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    210    209    210            ?           2604    16694    visits visit_id    DEFAULT     r   ALTER TABLE ONLY public.visits ALTER COLUMN visit_id SET DEFAULT nextval('public.visits_visit_id_seq'::regclass);
 >   ALTER TABLE public.visits ALTER COLUMN visit_id DROP DEFAULT;
       public          postgres    false    215    216    216            @          0    16636    sessions 
   TABLE DATA           J   COPY public.sessions (session_id, user_id, created_at, token) FROM stdin;
    public          postgres    false    214   *       >          0    16621    urls 
   TABLE DATA           K   COPY public.urls (url_id, user_id, url, short_url, created_at) FROM stdin;
    public          postgres    false    212   *       <          0    16607    users 
   TABLE DATA           K   COPY public.users (user_id, name, email, password, created_at) FROM stdin;
    public          postgres    false    210   o+       B          0    16691    visits 
   TABLE DATA           H   COPY public.visits (visit_id, url_id, user_id, visit_count) FROM stdin;
    public          postgres    false    216   e,       M           0    0    sessions_session_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.sessions_session_id_seq', 7, true);
          public          postgres    false    213            N           0    0    urls_url_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.urls_url_id_seq', 18, true);
          public          postgres    false    211            O           0    0    users_user_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.users_user_id_seq', 3, true);
          public          postgres    false    209            P           0    0    visits_visit_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.visits_visit_id_seq', 6, true);
          public          postgres    false    215            ?           2606    16643    sessions sessions_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (session_id);
 @   ALTER TABLE ONLY public.sessions DROP CONSTRAINT sessions_pkey;
       public            postgres    false    214            ?           2606    16629    urls urls_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (url_id);
 8   ALTER TABLE ONLY public.urls DROP CONSTRAINT urls_pkey;
       public            postgres    false    212            ?           2606    16619    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    210            ?           2606    16617    users users_name_key 
   CONSTRAINT     O   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_name_key UNIQUE (name);
 >   ALTER TABLE ONLY public.users DROP CONSTRAINT users_name_key;
       public            postgres    false    210            ?           2606    16615    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    210            ?           2606    16697    visits visits_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.visits
    ADD CONSTRAINT visits_pkey PRIMARY KEY (visit_id);
 <   ALTER TABLE ONLY public.visits DROP CONSTRAINT visits_pkey;
       public            postgres    false    216            ?           2606    16646    sessions sessions_user_id_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);
 H   ALTER TABLE ONLY public.sessions DROP CONSTRAINT sessions_user_id_fkey;
       public          postgres    false    3237    214    210            ?           2606    16630    urls urls_user_id_fkey    FK CONSTRAINT     z   ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);
 @   ALTER TABLE ONLY public.urls DROP CONSTRAINT urls_user_id_fkey;
       public          postgres    false    212    3237    210            ?           2606    16698    visits visits_url_id_fkey    FK CONSTRAINT     z   ALTER TABLE ONLY public.visits
    ADD CONSTRAINT visits_url_id_fkey FOREIGN KEY (url_id) REFERENCES public.urls(url_id);
 C   ALTER TABLE ONLY public.visits DROP CONSTRAINT visits_url_id_fkey;
       public          postgres    false    212    216    3239            ?           2606    16703    visits visits_user_id_fkey    FK CONSTRAINT     ~   ALTER TABLE ONLY public.visits
    ADD CONSTRAINT visits_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);
 D   ALTER TABLE ONLY public.visits DROP CONSTRAINT visits_user_id_fkey;
       public          postgres    false    210    216    3237            @   c   x?3?4?4202?54?52?L???HrO???????4???????3,t?,??rO?.?w??	??2+???w3M??1?,?ϫpʊ?M?ts?2???1z\\\ ??3.      >   ?   x?u??n?0  ?3?K??u7 ??ϦC?Y???!U??T?|?%???????.??u0PJY?A?kj1q2?)f[?Y?????Kނ???? rL?>? ??K???u????Y??R??y???neMB????ތEaɵ;?,??w,?7<]??ڋw??\m?t?U#i~?????u6/Ȓ(?OΒV??Zѻ?T6}??f??)?$??ɭ?>?}??L??f?j?      <   ?   x?m??R?0F??s?mh~?mwF????H???I(?A)????؅???;?s棈??QE?ą?Y-???M?4??j?YB??듵rnlI`?????*W?b`3z???o[??Gi/F?`Ba??}%????˗?????,?C%???	?{>Ǫ/?=?7??3??VzqnY?v????~p?߆?8?B?լ{+?Խ?g???rmz????E?򎡬?#?
?ߍW?1???Y?      B   0   x?3?44?4?4?2?44?42?\0È??(e?e?ih
f??qqq ?VR     